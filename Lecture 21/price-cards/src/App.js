import logo from './logo.svg';
import './App.css';
import Card from './Card'



function App() {
  var data = new Array(5).fill(null);
  let info = [
    {
      type: "Free",
      price: '$0',
      features: ['Single User', '5GB Storage', 'Unlimited Public Projects', 'Community Access'],
      features_not: ['Unlimited Private Projects','Dedicated Phone Support',  'Free Subdomain', 'Monthly Status Reports']
    },
    {
      type: "Plus",
      price: '$9',
      features: ['Single User', '5GB Storage', 'Unlimited Public Projects', 'Community Access','Unlimited Private Projects','Dedicated Phone Support',  'Free Subdomain'],
      features_not: [ 'Monthly Status Reports']
    },
    {
      type: "Pro",
      price: '$49',
      features: ['Single User', '5GB Storage', 'Unlimited Public Projects', 'Community Access','Unlimited Private Projects','Dedicated Phone Support',  'Free Subdomain', 'Monthly Status Reports'],
      features_not: []
    }
  ];
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {
            info.map((infor) => {
              return <Card type={infor.type} price={infor.price} features={infor.features} features_not={infor.features_not}></Card>
            })
          }
        </div>
      </div>
    </section>
  );
}

export default App;
