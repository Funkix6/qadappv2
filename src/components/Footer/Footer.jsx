import React from 'react';

const Footer = () => {
    return( 
        <footer class="relative bg-white bg-opacity-70 text-black-500 pt-8 pb-6">
            <div class="mx-auto px-4">
                <div class="flex flex-wrap items-center md:justify-between justify-center">
                    <div class="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div class="text-sm text-gray-600 font-semibold py-1">
                            Created By
                            <a href="https://github.com/funkix6"
                                class="text-purple-600 hover:text-purple-900"> Funkix6</a>.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;