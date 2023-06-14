import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const mapStateToPropsForRedirect = state => ({
  isAuth: state.auth.isAuth
});

const withAuthRedirect = (Component) => {

  function RedirectComponent(props) {
    const navigate = useNavigate();

    useEffect(() => {
      if (!props.isAuth) {
        navigate('/login');
      }
    }, [props.isAuth, navigate]);

    if (props.isAuth) {
      return <Component {...props} />;
    }

    return null;
  }

  const ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
  return ConnectedRedirectComponent;
};

export default withAuthRedirect;