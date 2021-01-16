import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import fetchPago from "../../../../../redux/actions/pagoAction";


export default function DatosPago({ mostrar, cancelar,habitacionNumero,monto,consumos,informacion }) {
  const pago = useSelector((state) => state.pago)
  const dispatch = useDispatch()
  
  const [datos, setDatos] = useState({
    nombreCliente: "",
    numeroTarjeta: "",
    mesVencimiento: "",
    anoVencimiento: "",
    cvv: "",
    habitacionNumero,
    monto,
    consumos,
    informacion
  });

  const inputTexto = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const inputNumero = (event) => {
    event.target.validity.valid ?
        setDatos({
            ...datos,
            [event.target.name]: event.target.value,
          })
        :
        event.target.value = ''
  };


  return (
    <div className={`pago-servicio ${!mostrar ? "d-none" : ""}` }>
      {(pago.loading) &&
        <div className="full-screen">
          <div className="d-flex flex-column">
            <div className="loader3"></div>
            <div className="mensaje-carga"><strong>Procesando Pago Porfavor Espere un momento</strong></div>
          </div>
        </div>
      }
      <div className="titulo-check text-center">
        <label>Informacion de metodo de pago</label>
      </div>
      <div className="input-contenido">
        <label htmlFor="">Nombre</label>
        <input
          className="form-control"
          name="nombreCliente"
          type="text"
          placeholder="Nombre"
          onChange={inputTexto}
          autoComplete={'off'}
        />
      </div>
      <div className="input-contenido">
        <label htmlFor="">Numero Tarjeta</label>
        <input
          className="form-control"
          type="text"
          placeholder="Numero Tarjeta"
          maxLength={16}
          onChange={inputNumero}
          name="numeroTarjeta"
          pattern="[0-9]*"
          autoComplete={'off'}
        />
      </div>
      <div className="fechas-tarjeta">
        <div className="input-contenido">
          <select className="form-control" name="mesVencimiento" id="" onChange={inputTexto}>
            <option value="" defaultValue="selected">
              Mes de Vencimiento
            </option>
            <option value="1">01 - Enero</option>
            <option value="2">02 - Febrero</option>
            <option value="3">03 - Marzo</option>
            <option value="4">04 - Abril</option>
            <option value="5">05 - Mayo</option>
            <option value="6">06 - Junio</option>
            <option value="7">07 - Julio</option>
            <option value="8">08 - Agosto</option>
            <option value="9">09 - Septiembre</option>
            <option value="10">10 - Octubre</option>
            <option value="11">11 - Noviembre</option>
            <option value="12">12 - Diciembre</option>
          </select>
        </div>
        <div className="input-contenido">
          <select className="form-control" name="anoVencimiento" id="" onChange={inputTexto}>
            <option value="" defaultValue="selected">
              Año de vencimiento
            </option>
            <option value="2021">2021</option>
            <option value="2022">2022</option> className="form-control"
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
            <option value="2031">2031</option>
            <option value="2032">2032</option>
            <option value="2033">2033</option>
            <option value="2034">2034</option>
            <option value="2035">2035</option>
          </select>
        </div>
        <div className="input-contenido">
          <input
            className="form-control"
            type="text"
            placeholder="CVV"
            name="cvv"
            required="required"
            maxLength="4"
            pattern="[0-9]*"
            onChange={inputNumero}
            autoComplete={'off'}
          />
        </div>
      </div>
      <div className="input-contenido botones-check">
        <button className="btn btn-danger" onClick={() => cancelar()}>
          Cancelar
        </button>
        <button
          className="btn btn-success"
          onClick={() =>dispatch(fetchPago(datos))}
        >
          Confirmar
        </button>
      </div>
    </div>
  );
}
