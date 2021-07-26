// import { COUNTER_CHANGE } from '../constants';
export function changeCount(count) {
    return {
        type: 'COUNTER_CHANGE',
        payload: count
    }
}

export function changeCountplus(count) {
    console.log('changeCountplus');
    return {
        type: 'COUNTER_CHANGE',
        payload: (count + 1)
    }
}