import React, { useEffect, useState } from "react";
import { AccountProps } from "../../Components/Type";
import { SIGN } from "../../Constants/WalletConstant";
import { Accordion, Button, Card, Col, Container, Row } from "react-bootstrap";
import { userService } from "../../Services/UserServices";

const ListSignedMessages = ({ setSelectedAction, account }: AccountProps) => {
  const back = () => {
    setSelectedAction(SIGN);
  };
  const [signedMessageList, setSignedMessageList] = useState([]);

  useEffect(() => {
    userService
      .getAllByAddress(account)
      .then(res => setSignedMessageList(res))
      .catch(console.error);
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col sm={12}></Col>
          <Col sm={12}>
            <Accordion defaultActiveKey="0">
              {signedMessageList.map((value: any, index) => {
                return (
                  <Card key={value._id}>
                    <Accordion.Toggle as={Card.Header} eventKey={value._id}>
                      {index + 1}: {value.owner}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={value._id}>
                      <Card.Body>
                        <br /> Signer: {value.signedAddress}
                        <br /> sign: {value.sign}
                        <br /> Message: {value.message}
                        <br /> Signed Time: {value.signed_time}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                );
              })}
            </Accordion>
          </Col>
        </Row>
        <br />
        <Button onClick={() => back()} variant="primary" type="button">
          Return
        </Button>
      </Container>
    </div>
  );
};

export default ListSignedMessages;
