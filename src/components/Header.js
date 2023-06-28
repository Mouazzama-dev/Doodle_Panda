import React, { useState } from 'react';
import { Container, Navbar, NavDropdown, Nav, Image, Alert } from 'react-bootstrap';
import Web3 from 'web3';
import contractAbi from '../DoodlePandas.json';

const Header = () => {
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('');
  const [mintCount, setMintCount] = useState(0);
  const [presaleEnded, setPresaleEnded] = useState(false);

  const handleMintClick = async () => {
    try {
      // Check if the presale has ended
      if (presaleEnded) {
        throw new Error('Presale has ended');
      }

      // Connect to web3 provider and enable wallet accounts
      const web3 = new Web3(window.ethereum);
      await window.ethereum.enable();

      // Create an instance of the smart contract
      const contractAddress = '0xD0748135723Dff04FC438295A450D8d350dc4EED'; // Replace with your contract address
      const contract = new web3.eth.Contract(contractAbi, contractAddress);

      // Get the currently selected account from the connected wallet
      const selectedAccount = window.ethereum.selectedAddress;
      if (!selectedAccount) {
        throw new Error('No Ethereum account selected');
      }

      // Check if the mint count has reached the limit
      if (mintCount >= 1000) {
        setPresaleEnded(true);
        throw new Error('Presale limit exceeded');
      }

      // Trigger the mint function from the smart contract using the selected account
      const gasPrice = '285000';
      const value = '3000000000000000';
      await contract.methods.mint(1).send({ from: selectedAccount, gasPrice, value });

      // Update the mint count
      setMintCount(prevCount => prevCount + 1);

      // Display success alert
      setAlertMessage('NFT minted successfully');
      setAlertVariant('success');
    } catch (error) {
      setAlertMessage('Error triggering mint function: ' + error.message);
      setAlertVariant('danger');
    }
  };

  return (
    <section className="pt-5">
      <Container className="maxWidth900px">
        <Navbar bg="white" expand="lg" className="rounded-5">
          <Navbar.Brand href="#" className="p-0 position-relative col-sm-1 me-sm-4">
            <Image src="images/dood-logo.png" className="header-logo" width="115" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto header-navbar">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#achieve">Achievement</Nav.Link>
              <Nav.Link href="#dripmap">Dripmap</Nav.Link>
              <Nav.Link href="#faq">FAQ</Nav.Link>
              <Nav.Link href="#team">Team</Nav.Link>
              <Nav.Link href="#" className="ms-md-3">
                <i className="fa fa-twitter"></i>
              </Nav.Link>
              <Nav.Link href="#" className="ms-md-3" onClick={handleMintClick}>
                Mint
              </Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {alertMessage && (
          <Alert variant={alertVariant} className="mt-4">
            {alertMessage}
          </Alert>
        )}
      </Container>
    </section>
  );
};

export default Header;
