import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CustomTextInput from './CustomTextInput';

const CreateServiceIncluded = (props: any) => {

    const [createServiceIncluded, setCreateServiceIncluded ] = React.useState("" as any)

    const handleOnChangeServiceIncluded = (e: any) => {
        const target = e.target;
        setCreateServiceIncluded(target.value)
    }

    const handleCreateServiceIncluded = () => {
        console.log("Create Service Included", createServiceIncluded)
        setCreateServiceIncluded("");
    }

    const enabledButton = () => {
      return createServiceIncluded !== "" ? false : true
    }

  return (
    <Modal
      {...props}
      size="l"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            <h5>Add service in the price</h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CustomTextInput required = {true} value={createServiceIncluded} onChange = {handleOnChangeServiceIncluded} name = "createServiceIncluded" />
      </Modal.Body>
      <Modal.Footer>
        <Button disabled = {enabledButton()} onClick={handleCreateServiceIncluded}>Submit</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateServiceIncluded