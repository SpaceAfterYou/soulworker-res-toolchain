import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.swstring("v1")
	.swstring("v2")
	.swstring("v3")
	.swstring("v4")
	.swstring("v5")
	.swstring("v6")
	.swstring("v7")
	.swstring("v8")
	.swstring("v9")
	.swstring("v10")
	.swstring("v11")
	.swstring("v12")
	.swstring("v13")
	.swstring("v14")
	.swstring("v15")
	.swstring("v16")
	.swstring("v17")
	.swstring("v18")
	.swstring("v19")