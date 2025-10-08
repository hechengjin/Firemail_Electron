import { localized, React } from 'mailspring-exports';
import { RetinaImg } from 'mailspring-component-kit';
import * as OnboardingActions from './onboarding-actions';
import { IdentityStore } from '../../../src/flux/stores/identity-store';

export default class WelcomePage extends React.Component {
  static displayName = 'WelcomePage';
  identityJSON = {
    firstName: 'Mailspring 050',
    lastName: 'Test',
    stripePlan: 'Basic',
    stripePlanEffective: 'Basic',
    emailAddress: 'mailspring050test@evanmorikawa.com',
    id: 'icihsnqh4pwujyqihlrj70vh',
    featureUsage: {
      feat: {
        quota: 10,
        usedInPeriod: 1,
      },
    },
    token: 'secret token',
  };


  componentDidMount() {
    console.log("page-welcome componentDidMount1");
    //IdentityStore._identity = this.identityJSON;
    IdentityStore.saveIdentity(this.identityJSON)
    console.log("page-welcome componentDidMount2");
  }

  _onContinue = () => {
    OnboardingActions.moveToPage('account-choose'); //tutorial
  };

  render() {
    return (
      <div className="page welcome">
        <div className="steps-container">
          <div>
            <p className="hero-text" style={{ fontSize: 46, marginTop: 257 }}>
              {localized('Welcome to Mailspring')}
            </p>
            <RetinaImg
              className="icons"
              url="mailspring://onboarding/assets/icons-bg@2x.png"
              mode={RetinaImg.Mode.ContentPreserve}
            />
          </div>
        </div>
        <div className="footer">
          <button key="next" className="btn btn-large btn-continue" onClick={this._onContinue}>
            {localized('Get Started')}
          </button>
        </div>
      </div>
    );
  }
}
