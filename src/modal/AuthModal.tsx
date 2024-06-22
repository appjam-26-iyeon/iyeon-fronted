import React, { useState } from 'react';
import styled from 'styled-components';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [authCode] = useState<string>('67812');

  return (
    <Modal isOpen={isOpen}>
      <ModalContent>
        <Header>
        </Header>
        <AuthCodeContainer>
          <AuthCodeLabel>인증 코드</AuthCodeLabel>
          <AuthCodeValue>{authCode}</AuthCodeValue>
          <ConfirmButton onClick={onClose}>확인</ConfirmButton>
        </AuthCodeContainer>
      </ModalContent>
    </Modal>
  );
};

const Modal = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 24px;
  width: 80%;
  max-width: 400px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Logo = styled.div`
  font-weight: bold;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const AuthCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AuthCodeLabel = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const AuthCodeValue = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const ConfirmButton = styled.button`
  background-color: #FF9393;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
`;

export default AuthModal;
