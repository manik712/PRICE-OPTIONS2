import PriceOption from "../PriceOption1/PriceOption";

const PriceOptions = () => {
  
  const   membershipOptions= [
      {
        "id": "1",
        "name": "Basic Membership",
        "price": "$29.99 per month",
        "features": [
          "Access to cardio equipment",
          "Use of free weights",
          "Locker room access",
          "Discounted personal training sessions"
        ]
      },
      {
        "id": "2",
        "name": "Premium Membership",
        "price": "$49.99 per month",
        "features": [
          "Unlimited access to all gym equipment",
          "Access to group fitness classes",
          "Sauna and steam room access",
          "Personalized workout plans",
          "Nutritional guidance"
        ]
      },
      {
        "id": "3",
        "name": "VIP Membership",
        "price": "$79.99 per month",
        "features": [
          "All Premium Membership features",
          "24/7 gym access",
          "Priority booking for fitness classes",
          "Complimentary towel service",
          "One-on-one sessions with a personal trainer"
        ]
      }
    ]
  
  

  return (
    <div className=" m-12 ">
         <h2 className="text-5xl text-center"> Best price in the town</h2>
        <div className="grid  md:grid-cols-3 gap-3 pt-4">
        {
          membershipOptions.map((option) =><PriceOption option={option} key={option.id}></PriceOption> )
         }
         

         
        </div>
    </div>
  );

  };
export default PriceOptions;