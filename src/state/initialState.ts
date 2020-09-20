interface InitialState {
  user: {
    loading: boolean;
    status: string;
    data: {
      email?: string;
      username?: string;
    };
  };
}

const initialState: InitialState = {
  user: {
    loading: false,
    status: '',
    data: {},
  },
  // categories: {},
};

export default initialState;
