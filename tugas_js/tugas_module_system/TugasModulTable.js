export default class TugasModulTable {

    constructor(data){
        this.data = data;
    }

    renderToHtml(app) {

        let header='';
        let body = '';
        let dataBodyFix =[]
        let arr = []
        let c = []
        
        //tampil header
        this.data.columns.forEach(element => {
            header = header + `<th scope="col">${element}</th>`
        });


        //cara semalam

        // this.data.data[0].forEach(element => {
        //     y = `<td>${element[element]}</td>` + y
        // });

        // this.data.data.map((tes) => {
        //     //data awal yg berhasil
        //     // z =  `<tr><td>${tes[0]}</td><td>${tes[1]}</td><td>${tes[2]}</td></tr>` + z
            
        //     x.push(tes)

        // })

        //ambil jumlah data push ke arr
        let jumlah_data = this.data.data
        jumlah_data.forEach((data)=>{
            arr.push(data)
        })

        //looping untuk ambil data dari array 0
        for (let index = 0; index < arr.length; index++) {
            console.log(arr[index])

            //tambahkan element <td> ke hasil array lalu simpan di var c
            for (let j = 0; j < arr[index].length; j++) {
                c.push(`<td>${arr[index][j]}</td>`)
            }
        }

        console.log(c)
        //hasilnya panjang
        // ['<td>John</td>', '<td>john@example.com</td>', '<td>(353) 01 222 3333</td>', '<td>Mark</td>', '<td>mark@gmail.com</td>', '<td>(01) 22 888 4444</td>', '<td>Mark</td>', '<td>mark@gmail.com</td>', '<td>(01) 22 888 4444</td>', '<td>Mark</td>', '<td>mark@gmail.com</td>', '<td>(01) 22 888 4444</td>']

        //looping untuk pisah2kan data yg ada di var c tergantung panjang array
        for (let index = 0; index < arr.length; index++) {

            dataBodyFix.push(c.splice(0,arr[index].length))
            
        }

        //looping untuk tambah ke variabel z biar tampil
        for (let index = 0; index < jumlah_data.length; index++) {
            body += `<tr>${dataBodyFix[index]}</td>`
        }


        app.innerHTML = `  
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    ${header}
                </tr>
            </thead>
            <tbody>
                ${body}
            </tbody>
        </table>`               
    }
}