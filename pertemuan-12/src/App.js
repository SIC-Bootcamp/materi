// import logo from "./logo.svg";
import HelloWorld from "./HelloWorld";
import "./App.css";

function App() {
  const nama = "thoriq";

  // const add = () => {

  // }

  let light = "green";
  let message;

  if (light === "green") {
    message = <h1>Boleh Jalan</h1>;
  }

  const lapar = false;

  const person = {
    nama: "skilvul",
    umur: 20,
    isVaccinated: true,
  };

  const murid = ["studytools", "e learning", "baik app"];

  const dataMurid = [
    {
      nama: "studytools",
      lokasi: "jakarta",
      kelas: 11,
    },
    {
      nama: "e learning",
      lokasi: "jakarta",
      kelas: 11,
    },
    {
      nama: "baik app",
      lokasi: "jakarta",
      kelas: 11,
    },
  ];
  // jsx
  return (
    <div className="App" id="id-app">
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />

      {person.umur}
      {person.umur}
      {person.umur}
      {/* <h1>Hello World</h1>
      <p>SIC Coding Bootcamp</p>
      <p>{nama.toUpperCase() + " skilvul"}</p> */}

      {/* {message} */}

      {/* {lapar ? <h1>makan</h1> : <h1>nunggu lapar</h1>} */}

      {/* {person.nama}
      {person.isVaccinated.toString()}
      {person.umur} */}

      {/* {murid.map((item, key) => (
        <h1 key={key}>{item}</h1>
      ))} */}

      {/* {murid}

      {dataMurid.map((item, key) => (
        <ul key={key}>
          <li>{item.nama}</li>
          <li>{item.lokasi}</li>
          <li>{item.kelas}</li>
        </ul>
      ))} */}
    </div>
  );
}

export default App;
