import React from 'react'
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";

class App extends React.Component {
    state = {
        data: []
    };

    handlePaste = e => {
        if (e.target.tagName && e.target.tagName.match(/(input|textarea)/i)) {
            return;
        }

        const data = e.clipboardData.getData("text");

        const rows = data.split("\n");
        const result = rows.map(row => {
            const cells = row.split("\t");
            return {
                ProductID: cells[0],
                ProductName: cells[1],
                Category:  cells[2] ,
                UnitPrice: cells[3],
                UnitsInStock: cells[4]
            };
        });
        this.setState({
            data: result
        });

        console.log(result)
    };

    render() {
        return (
            <>
                <ol>
                    <h1>Past</h1>
                </ol>
                {/* <div onPaste={this.handlePaste}>
                    <Grid style={{ height: "400px" }} data={this.state.data}>
                        <Column field="ProductID" title="ID" width="40px" />
                        <Column field="ProductName" title="Name" width="250px" />
                        <Column field="Category.CategoryName" title="CategoryName" />
                        <Column field="UnitPrice" title="Price" />
                        <Column field="UnitsInStock" title="In stock" />
                    </Grid>
                </div> */}


                <div onPaste={this.handlePaste}>

                    <table className="table" >
                        <thead>
                            <tr>
                                <th scope="col">Product ID</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Category</th>
                                <th scope="col">Unit Price</th>
                                <th scope="col">Units In Stock</th>

                            </tr>
                        </thead>
                        <tbody>

                            {/* {this.state.data.map((item, i) => {
                              { console.log(item.ProductName) }
                                    <React.Fragment key={i}>
                                        <tr  >

                                            <td>{item.ProductID}</td>
                                            <td>{item.ProductName}</td>
                                            <td>{item.Category}</td>
                                            <td>{item.UnitPrice}</td>
                                            <td>{item.UnitsInStock}</td>
                                            <td>hello</td>

                                        </tr>
                                    </React.Fragment>


                            })} */}


                            {this.state.data.map((item, i) => (
                                <tr key={i}>
                                    <td>{item.ProductID}</td>
                                    <td>{item.ProductName}</td>
                                    <td>{item.Category}</td>
                                    <td>{item.UnitPrice}</td>
                                    <td>{item.UnitsInStock}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}

export default App;
