import React from 'react'
import Button from './Button'
import './Button.scss'

const ButtonList = ( props ) => {
    return (
    <div className="button-section">
        <h3>Button Shapes</h3>
        <p>Large Buttons</p>
        <div className="app-row">
          <Button text="Close Shipment" status="neutral"  size="large" type="button" variant="primary"  />
          <Button text="Close Shipment" status="pressed"  size="large" type="button" variant="primary"  />
          <Button text="Close Shipment" status="inactive" size="large" type="button" variant="primary" />
        </div>

        <p>Medium Buttons</p>
        <div className="app-row">
          <Button text="Close Shipment" status="neutral" size="medium" type="button" variant="primary"  />
          <Button text="Close Shipment" status="pressed" size="medium" type="button" variant="primary"  />
          <Button text="Close Shipment" status="inactive" size="medium" type="button" variant="primary"  />
        </div>
       
        <p>Small Buttons</p>
       
        <div className="app-row">
          <Button text="Batch Now" status="neutral"  size="small" type="button" variant="primary"  />
          <Button text="Batch Now" status="pressed"  size="small" type="button" variant="primary"  />
          <Button text="Batch Now" status="inactive" size="small" type="button" variant="primary"  />
        </div>

        <p>Ghost Buttons</p>
        <div className="app-row">
          <Button text="Ship" status="neutral"  size="small" type="button" variant="ghost"  />
          <Button text="Ship" status="pressed"  size="small" type="button" variant="ghost"  />
          <Button text="Ship" status="inactive" size="small" type="button" variant="ghost"  />
        </div>

        <h3>Button Variants</h3>
        <div className="app-row">
          <Button text="Button" size="large" type="button" variant="primary" />
          <Button text="Button" size="large" type="button" variant="info" />
          <Button text="Button" size="large" type="button" variant="success" />
      </div>
      <div className="app-row">
        <Button text="Button" size="large" type="button" variant="warning" />
        <Button text="Button" size="large" type="button" variant="danger" />
        <Button text="Button" size="large" type="button" variant="default" />
      </div>
    </div>
    )
}

export default ButtonList;