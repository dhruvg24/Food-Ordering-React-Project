import React, { forwardRef } from 'react'
import './styles.css'
import MenuItem from './MenuItem'
const Menu = forwardRef(({list},ref) =>  (
    <main ref = {ref}>
        {/* main is a semantic tag */}
        {/* from data.js we are getting menuItemsData */}
        {list.map(item=>
            <p>
                {/* {item.name} */}
                <MenuItem key = {item.id} item = {item} />
            </p>
        )}
    </main>
  )
);

export default Menu