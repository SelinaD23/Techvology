import React from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Login from '../components/Login';
import Register from '../components/Register';

const User = () => {
    const [hasAccount, setHasAccount] = React.useState(true);

    const handleJoin = () => {
        setHasAccount(!hasAccount);
    }

    return (
        <div>
            <div class="p-5 mb-4" style={{ backgroundColor: '#9FD983' }}>
                <Row>
                    <Col md={6}>
                        <div class="container-fluid py-5">
                            <h1 class="display-5 fw">Join Us Today!</h1>
                            <Button
                                class="btn btn-lg"
                                type="button"
                                onClick={handleJoin}
                                style={{ backgroundColor: '#37782C', color: '#FEFED3' }}>
                                {hasAccount ? "Register" : "Login"}
                            </Button>
                        </div>
                    </Col>
                    <Col md={6}>
                        {hasAccount ? <Login /> : <Register setHasAccount={setHasAccount} />}
                    </Col>

                </Row>
            </div>
        </div>
    )
}

export default User;

