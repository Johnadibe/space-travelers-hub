import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store/store';
import Rockets from '../pages/rockets/Rockets';

describe('testing snapshot with Rockets', () => {
    it('testing Rockets component', () => {
        const rockets = render(
        <Provider store={store}>
            <BrowserRouter>
            <Rockets />
            </BrowserRouter>
        </Provider>,
        );
        expect(rockets).toMatchSnapshot();
    });
});