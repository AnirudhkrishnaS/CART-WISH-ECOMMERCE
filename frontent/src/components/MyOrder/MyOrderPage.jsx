import React from 'react'
import './MyOrderPage.css'
import Table from '../common/Table'


const MyOrderPage = () => {
  return (
    <section className="align-center myorder-page">
        <Table headings={["Order" , "Products" , "Total", "Status"]}>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Iphone  Power Bank</td>
                    <td>$1299</td>
                    <td>Shipped</td>
                </tr>
            </tbody>

        </Table>
    </section>
  )
}

export default MyOrderPage