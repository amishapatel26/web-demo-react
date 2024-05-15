import React, { useEffect, useState } from "react";

function Demo() {

    const [data, setData] = useState('');
    const [error, setError] = useState('');
    useEffect(() => {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => {
                if (response.ok) {
                    return response.json();

                }
                else {
                    throw Error('Error:' + response.status);
                }
            })
            .then(data => {
                setData(data.bpi);
            })
            .catch(error => {
                setError(error.message);
            })

    }, []);

    return (
        <>

            <h1>First flie Demo is creat</h1>
            <table>
                <thead>
                    <tr>
                        <th>Currency</th>
                        <th>Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data).map(currency => (
                        <tr key={currency}>
                            <td>{currency}</td>
                            <td>{data[currency].rate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </>
    )
}

export default Demo;