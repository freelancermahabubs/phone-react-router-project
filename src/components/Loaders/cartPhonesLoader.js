import { getShoppingCart } from "../../utilities/fakedb";

const cartPhoneLoader = async () =>{
  const loaderPhone = await fetch('phone.json');
  const phone = await loaderPhone.json();

  const storedCart = getShoppingCart();
  const saveCart = []
  for(const id in storedCart){
    const addedPhones = phone.find(pd => pd.id === id);
    if(addedPhones){
      const quantity = storedCart[id];
      addedPhones.quantity = quantity;
      saveCart.push(addedPhones)

    }
   
  }
  return saveCart;
}

export default cartPhoneLoader;