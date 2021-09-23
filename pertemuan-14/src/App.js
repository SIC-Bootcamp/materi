import {useState} from 'react'
import Form from './Form'

function App() {
  const [nama, setNama] = useState('skilvul');
  const [kelas, setKelas] = useState(12)
  const [domisili, setDomisili] = useState("Jakarta");

  const [formEkskul, setFormEkskul ] = useState("")
  const [ekskul, setEkskul ] = useState(['Basket', 'futsal'])

  // const [murid, setMurid] = useState({
  //   nama: "skilvul",
  //   kelas: 12
  // })


  const handleChangeMurid = ()=>{
    console.log('test')
    setNama('Samsung')
  }
  return (
    <div>
      <h1>{nama}</h1>
      <h1>{kelas}</h1>

      <button onClick={()=> setKelas(kelas + 1)}>Naik kelas</button>
      <button onClick={handleChangeMurid}>Ganti Nama</button>
      <Form domisili={domisili} setDomisili={setDomisili}/>
      <p>{domisili}</p>

      <h1>List Ekskul</h1>
      <input type="text" value={formEkskul} onChange={(event)=> setFormEkskul(event.target.value)}/>

      <button onClick={() => (setEkskul([...ekskul, formEkskul], setFormEkskul("")))}>Add Ekskul</button>
      {
        ekskul.map((item, key)=>(
          <ul key={key}>
            <li>{item}</li>
          </ul>
        ))
      }
    </div>
  );
}

export default App;
