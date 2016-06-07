function escapeHTML(str) {
	return str.replace(/[<>"&]/g, function(match) {
		switch(match) {
			case '<':
				return '&lt;';
			case '>':
				return '&gt;';
			case '&':
				return '&amp;';
			case '\"':
				return '&quot;';
		}
	})
}