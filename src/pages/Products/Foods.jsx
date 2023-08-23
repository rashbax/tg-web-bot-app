import React from 'react'
import './Products.css'
import * as Scroll from 'react-scroll'
import ProductList from '../../components/ProductList/ProductList'

const ScrollLink = Scroll.Link;

const products = [
  {id: '1', title: 'Джинсы', price: 5000, description: 'Синего цвета, прямые'},
  {id: '2', title: 'Куртка', price: 12000, description: 'Зеленого цвета, теплая'},
  {id: '3', title: 'Джинсы 2', price: 5000, description: 'Синего цвета, прямые'},
  {id: '4', title: 'Куртка 8', price: 122, description: 'Зеленого цвета, теплая'},
  {id: '5', title: 'Джинсы 3', price: 5000, description: 'Синего цвета, прямые'},
  {id: '6', title: 'Куртка 7', price: 600, description: 'Зеленого цвета, теплая'},
  {id: '7', title: 'Джинсы 4', price: 5500, description: 'Синего цвета, прямые'},
  {id: '8', title: 'Куртка 5', price: 12000, description: 'Зеленого цвета, теплая'},
]


export default function Foods() {
  return (
    <div>
      <div className="foods__container">
      
        <div className="foods__body">
          <div className="food__sort">
           <div className="food__sort-row">
           <ScrollLink 
            spy={true} 
            className='food__link' 
            activeClass="active" 
            to='burgers' 
            smooth={true} 
            duration={500} 
            offset={-270}>
              Burger
            </ScrollLink>
            <ScrollLink 
            spy={true} 
            className='food__link' 
            activeClass="active" 
            to='pizzas' 
            smooth={true} 
            duration={500} 
            offset={-50}>
              Piza
            </ScrollLink>
            <ScrollLink 
            spy={true} 
            className='food__link' 
            activeClass="active" 
            to='pizas' 
            smooth={true} 
            duration={500} 
            offset={-50}>
              HotDog
            </ScrollLink>
            <ScrollLink 
            spy={true} 
            className='food__link' 
            activeClass="active" 
            to='pizas' 
            smooth={true} 
            duration={500} 
            offset={-50}>
              HotDog
            </ScrollLink>
            <ScrollLink 
            spy={true} 
            className='food__link' 
            activeClass="active" 
            to='pizas' 
            smooth={true} 
            duration={500} 
            offset={-50}>
              HotDog
            </ScrollLink>
            <ScrollLink 
            spy={true} 
            className='food__link' 
            activeClass="active" 
            to='pizas' 
            smooth={true} 
            duration={500} 
            offset={-50}>
              HotDog
            </ScrollLink>
            <ScrollLink 
            spy={true} 
            className='food__link' 
            activeClass="active" 
            to='pizas' 
            smooth={true} 
            duration={500} 
            offset={-50}>
              HotDog
            </ScrollLink>
           </div>
          </div>
          <div className="foods__products">
            <ProductList name={'burgers'} products={products}/>
            <ProductList name={'pizzas'} products={products}/>
          </div>
        </div>
      </div>
    </div>
  )
}
