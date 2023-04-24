from __future__ import annotations

from typing import Final

import pytest
from requests import Response
import requests

HOST: Final = 'http://127.0.0.1:10000'


class TestProfile:

    _id: str

    @pytest.mark.dependency(depends=['create'])
    def test_update(self):
        update: dict[str, bool] = {
            'is_visible': False,
        }

        response: Response = requests.patch(f'{HOST}/profiles/1', json=update)
        if response.ok:
            new_response: Response = requests.get(f'{HOST}/profiles/1')
            if new_response.ok:
                assert new_response.json().get('is_visible') is False
            else:
                assert False
        else:
            assert False

    def test_list(self):
        response: Response = requests.get(f'{HOST}/profiles')
        assert response.ok and isinstance(response.json(), list)

