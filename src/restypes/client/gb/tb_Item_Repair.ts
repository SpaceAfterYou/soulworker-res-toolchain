import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.floatle("v1")
	.floatle("v2")
	.floatle("v3")
	.floatle("v4")
	.floatle("v5")
	.floatle("v6")
	.floatle("v7")
	.floatle("v8")
	.floatle("v9")
	.floatle("v10")
	.floatle("v11")
	.floatle("v12")
	.floatle("v13")
	.floatle("v14")
	.floatle("v15")
	.floatle("v16")
	.floatle("v17")
	.floatle("v18")
	.floatle("v19")