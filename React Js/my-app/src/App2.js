// const name = "Hello World";
  //   const obj = { name: "Hello World Object" }
  //   const data = ['javaScript', 'Python', 'Django' , 'Firebase' , 'Css']
  //   const list = [{ name: "Hello World 1" }, { name: "Hello World 2" }, { name: "Hello World 3" }]
  //   const complex = [{ company: 'XYZ', jobs: ['Javascript', 'React'] }, { company: 'ABC', jobs: ['AngularJs', 'Ionic'] }]
  // const ad = {
  //   title: 'AC',
  //   price: 52000,
  //   ton: 1.5,
  //   isUsed: true,
  //   warantee: '1 year'
  // }

  // const acs = [{
  //   title: 'Dawlance ABC123',
  //   price: 52000,
  //   ton: 1.5,
  //   isUsed: true,
  //   warantee: '1 year'
  // }, {
  //   title: 'Gree XTYZ23',
  //   price: 40000,
  //   ton: 1,
  //   isUsed: false,
  //   warantee: '2 year'
  // }, {
  //   title: 'Orient XTYZ23',
  //   price: 45000,
  //   ton: 1.5,
  //   isUsed: false,
  //   warantee: 'No'
  // }]



  /////////////////////////////////////////////////////////////////////////


  {/* /////////////////////////////// baeginners wali approach create manually//////// */}
        {/* <table border = "4" >
          <tr>
            <th>Key</th>
            <th>value</th>
          </tr>
          <tr>
            <td>price</td>
            <td>{ad.price}</td>
          </tr>
          <tr>
            <td>ton</td>
            <td>{ad.ton}</td>
          </tr>
        <tr>
          <td>Is Used</td>
          <td>{ad.isUsed? "yes": "no" }</td>
        </tr>


        </table>
 */}

        {/* //////////////////// clever programmer wali approach////////////// */}

        {/* <table border='4'>
    <tr>
      <th>Key</th>
      <th>value</th>
    </tr>
    {
      Object.keys(ad).map((item)=>{
        return <tr>
          <td>{item}</td>
          {Object.values(ad).map((values)=>{
          if(typeof values === 'boolean'){
            return <td>{values? 'yes' : 'no'}
            </td>
          }
          })}
        </tr>
      })
    }
   </table> */}

        {/* <h1>Question 1</h1>
   
   <table border='8'>
    <th>
      {Object.keys(ad).map(item=> <tr>{item}</tr> )}
    </th>
    <th>
      {Object.values(ad).map(Value=>{
        if(typeof Value=== 'boolean'){
          return<tr>{Value? 'yes' : 'no'}</tr>
        }
        return <tr>{Value}</tr>
      })}
    </th>

   </table> */}

        {/* <h1>Question number 2</h1>


      <table border='6' >
        <tr>
          {Object.keys(acs[0]).map(item=><th>{item}</th>)}
        </tr>

        {acs.map(item=>{
          return <tr>
            {Object.values(item).map(value=>{
              if(typeof value=== 'boolean'){
                return <td>{value? 'yes ' : 'no'}</td>
              }
              return <td>{value}</td>
            })}
          </tr>
        })}

      </table> */}

        {/* <p>{name}</p> */}

        {/* <h1>Question 1</h1>
       <p> Name: {name}</p>


       <h1>Question 2</h1>
       <p>Object: {obj.name}</p>


       <h1>Question 3</h1>
       <ul>
        {data.map(item=>{
          return <li>{item}</li>
        })}
       </ul>

       <h1>Question 4</h1>
       <ul>
        {list.map((item,index)=>{

          return<li>List At Index {index} ---- {item.name}</li>
        })}
       </ul>

       <h1>Question 5 </h1>
       {complex.map((item, index) => {
          return (
            <table border='8'>
              <th>
                <tr>

              
              <p>({index}) Company: {item.company}</p>
              <p>Jobs: {item.jobs[0]}, {item.jobs[1]}</p>
              <hr />
              </tr>
              </th>
            </table>

          )
        })} */}