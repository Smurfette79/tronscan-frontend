import React, {Component} from 'react';
import {connect} from "react-redux";
import {loadTokens} from "../../../actions/tokens";
import {FormattedDate, FormattedNumber, FormattedTime, injectIntl} from "react-intl";
import {tu} from "../../../utils/i18n";
import {Sticky, StickyContainer} from "react-sticky";
import {Client} from "../../../services/api";
import Paging from "../../common/Paging";
import {TokenLink} from "../../common/Links";
import {getQueryParam} from "../../../utils/url";

class TokenList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tokens: [],
      loading: false,
      total: 0,
      filter: {
        name: `%${getQueryParam(props.location, "search", 0)}%`
      },
    };
  }

  loadPage = async (page = 1, pageSize = 40) => {
    let {filter} = this.state;

    this.setState({loading: true});

    let {tokens, total} = await Client.getTokens({
      sort: '-name',
      limit: pageSize,
      start: (page - 1) * pageSize,
      ...filter,
    });

    function compare(property) {
      return function (obj1, obj2) {

        if (obj1[property] > obj2[property]) {
          return -1;
        } else if (obj1[property] < obj2[property]) {
          return 1;
        } else {
          return 0;
        }

      }
    }

    tokens = tokens.sort(compare('issuedPercentage'));
    this.setState({
      loading: false,
      tokens,
      total,
    });
  };

  componentDidMount() {
    this.loadPage();
  }

  setSearch = () => {
    let search = getQueryParam(this.props.location, "search", 0);
    console.log("TOKEN SEARCH", search);

    this.setState({
      filter: {
        name: `%${search}%`,
      }
    });
  };

  componentDidUpdate(prevProps, prevState) {
       console.log("check", prevProps, prevState);
    if (this.props.location !== prevProps.location) {
      this.setSearch();
    }

    if (this.state.filter !== prevState.filter) {
      console.log("SEARCH CHANGED!");
      this.loadPage();
    }
  }

  onChange = (page, pageSize) => {
    this.loadPage(page, pageSize);
  };

  render() {

    let {tokens, alert, loading, total} = this.state;
    let {match} = this.props;

    return (
        <main className="container header-overlap">
          {alert}
          {
            <div className="row">
              <div className="col-md-12">
                <StickyContainer>
                  <div className="card">
                    <Sticky>
                      {
                        ({style}) => (
                            <div style={{zIndex: 100, ...style}} className="py-3 bg-white card-body border-bottom">
                              <Paging onChange={this.onChange} loading={loading} url={match.url} total={total}/>
                            </div>
                        )
                      }
                    </Sticky>
                    <table className="table table-hover m-0 table-striped">
                      <thead className="thead-dark">
                      <tr>
                        <th className="text-nowrap">{tu("name")}</th>
                        <th className="d-none d-md-table-cell" style={{width: 100}}>{tu("abbreviation")}</th>
                        <th className="d-none d-md-table-cell" >{tu("total_supply")}</th>
                        <th className="d-none d-md-table-cell" style={{width: 150}}>{tu("total_issued")}</th>
                        <th className="text-nowrap" style={{width: 150}}>{tu("registered")}</th>
                        {/*<th style={{width: 150}}>{tu("addresses")}</th>*/}
                        {/*<th style={{width: 150}}>{tu("transactions")}</th>*/}
                      </tr>
                      </thead>
                      <tbody>
                      {
                        tokens.map((token, index) => (
                            <tr key={index}>
                              <td className="text-nowrap"><TokenLink name={token.name}/></td>
                              <td className="d-none d-md-table-cell">{token.abbr}</td>
                              <td className="d-none d-md-table-cell"><FormattedNumber value={token.totalSupply}/></td>
                              <td className="d-none d-md-table-cell"><FormattedNumber value={token.issued}/></td>
                              <td className="text-nowrap">
                                <FormattedDate value={token.dateCreated}/>{' '}
                                <FormattedTime value={token.dateCreated}/>
                              </td>
                              {/*<td><FormattedNumber value={token.addresses} /></td>*/}
                              {/*<td><FormattedNumber value={token.transactions} /></td>*/}
                            </tr>
                        ))
                      }
                      </tbody>
                    </table>
                  </div>
                </StickyContainer>
              </div>
            </div>
          }
        </main>

    )
  }
}

function mapStateToProps(state) {
  return {
    account: state.app.account,
  };
}

const mapDispatchToProps = {
  loadTokens,
};

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(TokenList));
