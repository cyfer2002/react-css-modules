import React from 'react'
import { Row } from 'reactstrap'
import './index.scss'

class Footer extends React.Component {
  render() {
    return (
      <div styleName="footer">
        <div className="container">
          <Row>
            <p>
              <a className="col-sm-3 offset-sm-3 col-xs-4 col-xs-offset-3" href="/">
                Home
              </a>
            </p>
            <p>
              <a className="col-sm-3 col-xs-4" href="#">
                Find
              </a>
            </p>
            <p>
              <a className="col-sm-3 offset-sm-3 col-xs-4 col-xs-offset-3" href="#">
                Contact
              </a>
            </p>
            <p>
              <a className="col-sm-3 offset-sm-0 col-xs-4 offset-xs-3" href="#">
                Another Link
              </a>
            </p>
            <p>
              <a className="col-sm-3 offset-sm-3 col-xs-4" href="#">
                Another Link
              </a>
            </p>
          </Row>
          <Row>
            <div styleName="hr">
              <div styleName="copyright-line">2018 © Tous droits réservés</div>
            </div>
          </Row>
        </div>
      </div>
    )
  }
}

export default Footer
