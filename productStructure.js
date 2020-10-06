const products = [
  "preto-PP", 
  "preto-M", 
  "preto-G", 
  "preto-GG", 
  "preto-GG", 
  "branco-PP", 
  "branco-G", 
  "vermelho-M", 
  "azul-XG", 
  "azul-XG", 
  "azul-XG", 
  "azul-P"
]

module.exports = () => {
  let productsObjects = {};
  products.forEach((product)=>{
    const productColor = product.substring(0,product.indexOf("-"));
    const productSize = product.substring(product.indexOf("-") +1);
  
    if(Object.keys(productsObjects).indexOf(productColor) === -1 ){
      productsObjects[productColor] = {[productSize]:1};
    }else {
        if(Object.keys(productsObjects[productColor]).indexOf(productSize) === -1){
          let color = productsObjects[productColor];
          productsObjects[productColor] = ({...color, [productSize]:1})
        }else{
          let color = productsObjects[productColor];
          productsObjects[productColor] = ({...color, [productSize]:productsObjects[productColor][productSize]+1})
        }
      }
  
    }
  
   )
  return productsObjects;
}

