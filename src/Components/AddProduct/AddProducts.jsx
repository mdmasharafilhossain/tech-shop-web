


const AddProducts = () => {
    
    const handleAddProduct = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const BrandName = form.brandName.value;
        const Type = form.type.value;
        const Price = form.price.value;
        const Des = form.des.value;
        const Rating = form.rating.value;
        const Image = form.img.value;

        const newProducts = {name,BrandName,Type,Price,Des,Rating,Image}
        console.log(newProducts);

        // server 

        fetch('https://brand-shop-server-kliazrf7w-md-mashrafil-hossain-mahis-projects.vercel.app/pro',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body:JSON.stringify(newProducts)
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
        })
    }

    


    return (
        <div className="bg-green-100 pt-[500px] md:pt-60 lg:pt-48 pb-32">


            <div className="">
                <h2 className="font-bold  bg-green-100 text-green-500  text-5xl text-center mt-16 py-5 mb-10  ">Add Products</h2>
                <form onSubmit={handleAddProduct}  className="container mx-auto">
                    {/* For Name And Brand Name */}
                    <div className="flex flex-col md:flex-row lg:flex-row gap-5">
                        <div className="form-control w-3/4 md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">

                                <input type="text" placeholder="Name" name="name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-3/4 md:w-1/2">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <label className="input-group">

                                <input type="text" placeholder="Brand Name" name="brandName" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* For Type And Price */}
                    <div className="flex flex-col md:flex-row lg:flex-row gap-5">
                        <div className="form-control w-3/4 md:w-1/2">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <label className="input-group">

                                <input type="text" placeholder="Products Type" name="type" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-3/4 md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">

                                <input type="text" placeholder="Product Price" name="price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* For Rating And Brand Name */}
                    <div className="flex flex-col md:flex-row lg:flex-row gap-5">
                        <div className="form-control w-3/4 md:w-1/2">
                            <label className="label">
                                <span className="label-text">Short description</span>
                            </label>
                            <label className="input-group">
                                
                                <input type="text" placeholder="Short description" name="des" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-3/4 md:w-1/2">
      <label className="label">
        <span className="label-text">Rating</span>
      </label>
      <label className="input-group">
                                
                                <input type="text" placeholder="Rating" name="rating" className="input input-bordered w-full" />
                            </label>
      
    </div>
                    </div>
                    <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <label className="input-group">
                                
                                <input type="text" placeholder="Image URL" name="img" className="input input-bordered w-full" />
                            </label>
                        </div>

                   <input type="submit" value="Add Product " className="btn btn-block mt-10 text-white bg-green-600 hover:bg-green-700"/>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;