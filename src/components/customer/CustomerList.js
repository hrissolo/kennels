import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import { CustomerCard } from "./CustomerCard"
import "./Customer.css"

export const CustomerList = () => {
   // This state changes when `getCustomers()` is invoked below
    const { customers, getCustomers } = useContext(CustomerContext)
	
	//useEffect - reach out to the world for something
    useEffect(() => {
		getCustomers()
		
    }, [])


    return (	
		<div className="customers">
		    {console.log("CustomerList: Render")}
        {
			customers.map(customer => {
				return <CustomerCard key={customer.id} address={customer.address} name={customer.name} />
			})
        }
        </div>
    )
}