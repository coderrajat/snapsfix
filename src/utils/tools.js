
function  importproducticon(r){
    try {
        let producticon = {};
        r.keys().forEach((item, index) => { producticon[item.replace('./', '')] = r(item); });
        return producticon
    } catch (error) {
        console.log('Error fetching images:', error);
    }
}

const images=importproducticon(require.context('../assets/media/image', false, /\.(png|jpe?g|svg)$/));

export default images