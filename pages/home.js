import React from 'react'
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { isRtl } from '@progress/kendo-react-data-tools';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            showErro: true,
            // colorchnge: false
        };
    }


    handlePaste(e) {

        // console.log("first check color ", this.state.colorchnge)

        if (e.target.tagName && e.target.tagName.match(/(input|textarea)/i)) {
            return;
        }

        const data = e.clipboardData.getData("text");
        // console.log(data)

        const rows = data.split("\n");
        const result = rows.map(row => {
            const cells = row.split("\t");
            const chl = cells[1]
            // console.log(cells)
            // for (let i = chl.length - 1; i >= 0; i--) {
            //     let clls = cells.splice(i, 1);
            //     console.log("clls ", clls)
            // }
            // if (chl.length < 25) {

            //     const fls = false

            //     // eslint-disable-next-line react/no-direct-mutation-state
            //     this.state.colorchnge = fls;
            //     console.log("blue ", this.state.colorchnge)
            //     console.log("chl.length ", chl.length)

            // } else {
            //     console.log("nothing ", chl.length)
            //     const tru = true
            //     // eslint-disable-next-line react/no-direct-mutation-state
            //     this.state.colorchnge = tru;

            //     console.log("red ", this.state.colorchnge)

            // }

            return {
                ProductID: cells[0],
                ProductName: cells[1],
                Category: cells[2],
                UnitPrice: cells[3],
                UnitsInStock: cells[4]
            };


        });
        this.setState({
            data: result,
            showErro: false
        });

        // this.checkEmptyGrid(result)





        // console.log(this.state.data)
    };

    checkEmptyGrid(item) {

        if (item.UnitPrice.length > 15) {
            this.state.colorchnge = true
            console.log("product id :-  ", item.UnitPrice.length, " ", this.state.colorchnge)

        } else {
            this.state.colorchnge = false
            console.log("greater then 15", item.UnitPrice.length, " ", this.state.colorchnge)
        }

    }

    render() {
        // console.log(this.state.data[0])
        return (
            <div className='wd-100'>
                <div className='wd-100 rl' >



                    <div className='rls'>
                        <span className='wd-3 svgR crp' onClick={() => this.setState({
                            data: [],
                            showErro: true
                        })}>
                            <svg viewBox="0 0 512 512" ><path fill="currentColor" d="M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z" ></path></svg>
                        </span>
                        <h1 className='fl-r mg-r crp' onClick={() => this.setState({
                            data: [],
                            showErro: true

                        })}>Reload</h1>
                    </div>


                </div>
                {/* <div onPaste={this.handlePaste}>
                    <Grid style={{ height: "400px" }} data={this.state.data}>
                        <Column field="ProductID" title="ID" width="40px" />
                        <Column field="ProductName" title="Name" width="250px" />
                        <Column field="Category.CategoryName" title="CategoryName" />
                        <Column field="UnitPrice" title="Price" />
                        <Column field="UnitsInStock" title="In stock" />
                    </Grid>
                </div> */}

                <div onPaste={(e) => this.handlePaste(e)} className='tbl'>
                    <main className='mainTableC'>
                        <div className='tblDiv'>
                            {this.state.showErro ? (<h1 className='psh'>Paste here</h1>) : null}

                            <table className="table table-striped table-hover" >

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

                                    {this.state.data.map((item, i) => (
                                        <>
                                            {console.log(this.checkEmptyGrid(item))}
                                            <React.Fragment key={i}>
                                                <tr  >
                                                    <td >{item.ProductID}</td>
                                                    <td>{item.ProductName}</td>
                                                    <td>{item.Category}</td>
                                                    <td style={{ color: this.state.colorchnge ? "red" : "#1E1E1E" }}>{item.UnitPrice}</td>
                                                    <td>{item.UnitsInStock}</td>
                                                </tr>

                                            </React.Fragment>
                                        </>
                                    ))}

                                    {/* {this.state.data.map((item, i) => (
                                        
                                        <tr key={i}>
                                            <td>{item.ProductID}</td>
                                            <td>{item.ProductName}</td>
                                            <td>{item.Category}</td>
                                            <td style={{ color: this.state.colorchnge ? "red" : "#1E1E1E" }}>{item.UnitPrice}</td>
                                            <td>{item.UnitsInStock}</td>
                                        </tr>
                                    ))} */}

                                </tbody>
                            </table>

                        </div>
                    </main>
                </div>

            </div>
        );
    }
}

export default App;
