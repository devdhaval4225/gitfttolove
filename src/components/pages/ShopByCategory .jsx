import React from 'react';


const ShopByCategory = () => {
    return (
        <div className="py-10 px-4 text-center bg-white">
            <h2 className="text-2xl font-bold text-gray-800">Shop By Category</h2>
            <p className="text-sm italic text-gray-500 mt-1">Built with Love of India</p>
            <div class="columns-4 max-w-7xl gap-y-3 mx-auto">
                <div>
                    <img class="aspect-square py-5" src="https://www.gifttolove.in/cdn/shop/files/glitter-and-unicorn-costume-headband_360x.jpg?v=1729829769" />
                    <p className='text-xl'>craft glitter</p>
                    <p className='text-gray-400'>18 products</p>
                </div>
                <div>
                    <img class="aspect-square py-5" src="https://www.gifttolove.in/cdn/shop/files/hands-cup-white-beads-with-black-letters-on-them_360x.jpg?v=1729829889" />
                    <p className='text-xl'>Craft amblishment b</p>
                    <p className='text-gray-400'>247 products</p>
                </div>
                <div>
                    <img class="aspect-square py-5" src="https://www.gifttolove.in/cdn/shop/files/two-tubes-of-blue-paint-spill-their-contents_360x.jpg?v=1729797268" />
                    <p className='text-xl'>Acrylic paint</p>
                    <p className='text-gray-400'>51 products</p>
                </div>
                <div>
                    <img class="aspect-square py-5" src="https://www.gifttolove.in/cdn/shop/files/artificial-plant-in-white-pot_360x.jpg?v=1729797247" />
                    <p className='text-xl'>Artifficial flower</p>
                    <p className='text-gray-400'>75 products</p>
                </div>
                <div>
                    <img class="h-140  py-5 " src="https://www.gifttolove.in/cdn/shop/files/a-paintbrush-trails-white-paint-on-purple-paper_360x.jpg?v=1737433800" />
                    <p className='text-xl'>paint brush </p>
                    <p className='text-gray-400'>60 products</p>
                </div>
                <div>
                    <img class="aspect-square py-5 " src="https://www.gifttolove.in/cdn/shop/collections/Artificial_Grass_Mat_360x.png?v=1729496831" />
                    <p className='text-xl'>Artifficial grass and met</p>
                    <p className='text-gray-400'>13 products</p>
                </div>
                <div>
                    <img class="aspect-square py-5" src="https://www.gifttolove.in/cdn/shop/files/female-artist-closeup_360x.jpg?v=1729796918" />
                    <p className='text-xl'>canvas board</p>
                    <p className='text-gray-400'>30 products</p>
                </div>
            </div>
        </div>
    );
};

export default ShopByCategory;
