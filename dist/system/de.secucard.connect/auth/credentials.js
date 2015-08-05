System.register(['./token'], function (_export) {
	'use strict';

	var Token, Credentials;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_token) {
			Token = _token.Token;
		}],
		execute: function () {
			Credentials = function Credentials() {
				_classCallCheck(this, Credentials);

				this.token = null;

				this.client_id = null;
				this.client_secret = null;

				this.uuid = null;

				this.code = null;

				this.username = null;
				this.password = null;
				this.device = null;
				this.deviveinfo = { name: null };
			};

			_export('Credentials', Credentials);

			Credentials.create = function (credentials) {

				var cr = new Credentials();
				if (credentials.token) {
					credentials.token = Token.create(credentials.token);
					credentials.token.setExpireTime();
				}
				return Object.assign(cr, credentials);
			};
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlLnNlY3VjYXJkLmNvbm5lY3QvYXV0aC9jcmVkZW50aWFscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7WUFhYSxXQUFXOzs7Ozs7a0JBRmhCLEtBQUs7OztBQUVBLGNBQVcsR0FFWixTQUZDLFdBQVcsR0FFVDswQkFGRixXQUFXOztBQUl0QixRQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzs7QUFLbEIsUUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDdEIsUUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7O0FBRzFCLFFBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOztBQUVqQixRQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzs7QUFFakIsUUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDckIsUUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDckIsUUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDbkIsUUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQztJQUUvQjs7MEJBdEJXLFdBQVc7O0FBMEJ4QixjQUFXLENBQUMsTUFBTSxHQUFHLFVBQUMsV0FBVyxFQUFLOztBQUVyQyxRQUFJLEVBQUUsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO0FBQzNCLFFBQUcsV0FBVyxDQUFDLEtBQUssRUFBRTtBQUNyQixnQkFBVyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwRCxnQkFBVyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUNsQztBQUNELFdBQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFFdEMsQ0FBQyIsImZpbGUiOiJkZS5zZWN1Y2FyZC5jb25uZWN0L2F1dGgvY3JlZGVudGlhbHMuanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyJ9