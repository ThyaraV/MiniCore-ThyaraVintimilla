import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useGetGradesQuery } from '../slices/gradesApiSlice.js';
import { useGetProgresosQuery } from '../slices/progresoApiSlice.js';
import '../assets/styles/index.css'; // Asegúrate de que la ruta sea correcta

const ProgresoScreen = () => {
  const { data: grades, isLoading, error } = useGetGradesQuery();
  //const { data: progresos, isLoading, error } = useGetProgresosQuery();

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <div>{error?.data?.message || error.error}</div>;

  return (
    <>
      <h1>Progreso</h1>
      <Row>
        <Col xs={12}>
          <table className="customTable customTableStriped customTableHover"> {/* Usa las nuevas clases */}
            <thead>
              <tr>
                <th>User</th> {/* Cambia a User Name si tienes los nombres disponibles */}
                <th>Grade</th>
                <th>Progreso 1</th>
                <th>Progreso 2</th>
                <th>Progreso 3</th>
              </tr>
            </thead>
            <tbody>
              {grades.map(grade => (
                <tr key={grade._id}>
                  <td>{grade.user.name}</td> 
                  <td>{grade.grade}</td>
                </tr>
              ))}
              
            </tbody>
          </table>
        </Col>
      </Row>
    </>
  );
};

export default ProgresoScreen;
