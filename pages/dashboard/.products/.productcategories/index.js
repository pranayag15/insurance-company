import React from 'react';
import { connect } from 'react-redux'

import {productCategories, addProductCategory} from "../../../../src/reduxHelper"
import Categories from "../../../../src/components/organisms/categories"

import {categoryData} from "./category.data"
import uuidv4 from "uuid/v4"


class App extends React.Component {
    constructor(props){
      super(props)
      this.state ={
        productsTableData: []
      }
    }
    
      

    componentDidMount(){
      this.loadProductCategoryData()
    }

    handleCreateProductCategory(data, cb){
      console.log(data);
      data.values.productcategoryID = uuidv4()
      data.values.business = this.props.business.response.data.businessID
      this.props.addProductCategory(data.values).then(res => {
        this.loadProductCategoryData()
        cb({status: true, message: "Product category added"})
      }). catch(err => {
        console.log(err);
        cb({status: false, message: "Some Error occured"})
      })
    }
      
      callback(key) {
        // console.log(key);
       }
    render() {
      // console.log('rerender');
      if(true){
        return (
              <div>
                <Categories 
                  cardData={categoryData.cardData} 
                  cascaderData={categoryData.cascaderData} 
                  columns={categoryData.categoryColumns} 
                  columnData = {this.state.productsTableData}
                  onCreate={(data, cb) => this.handleCreateProductCategory(data, cb)} 
                />
              </div>
          );
      }else {
          return <h1>Loading</h1>
      }
        
  }
  _createProductCategory = (data) => {
    let temp = []
    if(Array.isArray(data)){
      data.map(item => {
        let object = {}
        //map array data here
        object.name = item.name,
        // object.inventory = [50],
        temp.push(object)
      })
    } else {
      let object = {}
      //map data here
      object.name = data.name,
      temp.push(object)
    }
    return temp;
  }
  
  loadProductCategoryData = () => {
    let urlParams = {}
    urlParams.businessID = this.props.business.response.data.businessID
    this.props.getProductCategory(urlParams).then(res=>{
      this.setState({productsTableData: this._createProductCategory(res)})
    })
    .catch(err => {
      console.log(err)
    })
  }
}


const mapStateToProps = state => ({
    business: state.businesses,
    productCategories: state.productCategories,
    addProductCategory: state.addProductCategory
  })
  // Example Syntax for writing dispatch
  const mapDispatchToProps = dispatch => ({
    getProductCategory: (businessID) => dispatch(productCategories.action(businessID)),
    addProductCategory: (businessID, object) => dispatch(addProductCategory.action(businessID, object))
   })
  export default connect(mapStateToProps,mapDispatchToProps)(App);