from __future__ import annotations

from typing import Final

import pytest
from requests import Response
import requests

HOST: Final = 'http://127.0.0.1:10000'


class TestBook:

    _id: str

    @pytest.mark.dependency(name='create')
    def test_create(self):
        create: dict[str, str | bool] = {
            'name': 'Королевская кровь',
            'title': 'Сорваный венец',
            'author': 'Ирина Котова',
            'description': 'Королевская семья проходит через испытание лишения власти',
            'price': 254
        }

        response: Response = requests.post(f'{HOST}/books', json=create)
        if response.ok:
            pytest._id = response.json().get('id')
        assert response.ok

    @pytest.mark.dependency(depends=['create'])
    def test_update(self):
        update: dict[str, str | bool] = {
            'name': 'Королевская кровь',
            'title': 'Сорванный венец',
            'author': 'Ирина Котова',
            'description': 'Королевская семья проходит через испытание лишения власти',
            'price': 254
        }

        response: Response = requests.put(f'{HOST}/books/{pytest._id}', json=update)
        assert response.ok

    def test_list(self):
        response: Response = requests.get(f'{HOST}/books')
        assert response.ok and isinstance(response.json(), list)

    @pytest.mark.dependency(depends=['create'])
    def test_get(self):
        response: Response = requests.get(f'{HOST}/books/{pytest._id}')
        assert response.ok and response.json().get('id') == pytest._id

    @pytest.mark.dependency(depends=['create'])
    def test_delete(self):
        response: Response = requests.delete(f'{HOST}/books/{pytest._id}')
        assert response.ok