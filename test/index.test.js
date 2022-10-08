import {tinderPagination} from '../index.js';

import { test } from 'uvu';
import * as assert from 'uvu/assert';

test('tinderPagination next page', () => {
    const tinderP = new tinderPagination();
    tinderP.next();
    assert.is(tinderP.actualPage, 2);
});

test('tinderPagination previous page', () => {
    const tinderP = new tinderPagination();
    tinderP.next();
    tinderP.previous();
    assert.is(tinderP.actualPage, 1);
    tinderP.next();
    tinderP.next();
    tinderP.next();
    tinderP.next();
    tinderP.previous();
    tinderP.previous();
    tinderP.previous();
    tinderP.previous();
    tinderP.previous();
    tinderP.previous();
    tinderP.previous();
    tinderP.previous();
    assert.is(tinderP.actualPage, 5);
});

test('tinderPagination newsPerson', () => {
    const tinderP = new tinderPagination();
    tinderP.newsPerson([
        {
            id: 4,
            name: 'Jack1',

        },
    ]);
    let personas = tinderP.getPersonas();
    assert.is(JSON.stringify(personas), 
    
    JSON.stringify(
        [
            {
                        id: 3,
                        name: 'Jack1',
                    },
                    {
                        id: 4,
                        name: 'Jack1',
                    }
        ]));




});

test.run();