import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

import './style.css';

function ModalVacancy(props) {
  const { title, area, level, experience, description, requirements } = props.vacancy;

  const abreTeste = _=> {
    alert("ABRE O TESTE");
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          { title }
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Descrição da vaga</h5>
        <div className="vacancy-data">
          <div className="basic-data">
            <div className="data">
              <span>Área:&nbsp;</span>
              <p>{ area }</p>
            </div>
            <div className="data">
              <span>Nível:&nbsp;</span>
              <p>{ level }</p>
            </div>
            <div className="data">
              <span>Experiência:&nbsp;</span>
              <p>{ experience }</p>
            </div>
          </div>

          <span>Descrição:&nbsp;</span>
          <p>{ description }</p>

          <span>Requisitos:&nbsp;</span>
          {
            requirements &&
            requirements.map( ( requirement, key ) => {
              return (
                <ListGroup key={ key }>
                    {
                      requirement.have ?
                      <ListGroup.Item variant="success">{ requirement.description }</ListGroup.Item> :
                      <ListGroup.Item>{ requirement.description }</ListGroup.Item>
                    }
                </ListGroup>
              )
            })
          }
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={ abreTeste }>Fazer Teste</Button>
        <Button onClick={ props.onHide }>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalVacancy;
