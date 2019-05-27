import React, { Component } from "react"
import { connect } from "react-redux"

import Purchase from '../../../src/components/organisms/ItemPurchase'
import { stockdiary, products, getLocationByID } from "../../../src/reduxHelper"

import { itemPurchaseData } from './purchase.data'
import wrapper from './wrapper'
import uuidv4 from "uuid/v4"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            purchaseItemTableData: []
        }
    }

    componentDidMount() {
        console.log("purchase state", this.props)
        this.loadPurchaseData()
    }

    render() {
        return (
            <div>
                <Purchase
                    rowSelection={{}}
                    columns={itemPurchaseData.itemPurchaseColumns}
                    columnData={this.state.purchaseItemTableData}
                    cascaderData={itemPurchaseData.cascaderData}
                />
            </div>
        )
    }

    createpurchasecolumns(data) {
        let temp = []
        if (Array.isArray(data)) {
            data.map(item => {
                let object = {}
                object.purchaseItemID = item.id
                object.quantity = item.units
                object.location = this.props.blocations.response.data[this.props.blocations.response.data.findIndex(id => id.blocationID == item.location)].name
                object.productsData = this.props.products.response.data[this.props.products.response.data.findIndex(id => id.productID == item.product)]
                temp.push(object)
            })
        } else {
            let object = {}
            object.purchaseItemID = item.id
            object.quantity = item.units
            object.location = this.props.blocations.response.data[this.props.blocations.response.data.findIndex(id => id.blocationID == item.location)].name
            object.productsData = this.props.products.response.data[this.props.products.response.data.findIndex(id => id.productID == item.product)]
            temp.push(object)
        }
        return temp
    }

    loadPurchaseData() {
        this.props.stockdiary()
            .then(data => {
                console.log("gibberish", data)
                this.setState({ purchaseItemTableData: this.createpurchasecolumns(data) })
            })
    }
}

const mapStateToProps = state => {
    return {
        stockdiary: state.stockdiary,
        blocations: state.getLocationByID
    }
}

const mapDispatchToProps = dispatch => ({
    stockdiary: () => dispatch(stockdiary.action()),
})

export default wrapper(connect(mapStateToProps, mapDispatchToProps)(App))