import { connect } from 'dva';

const Login = () => {};

Login.propTypes = {};

function mapStateToProps(state) {
  return { ...state.data };
}

export default connect(mapStateToProps)(Login);
