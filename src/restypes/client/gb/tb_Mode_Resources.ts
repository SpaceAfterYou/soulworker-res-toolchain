import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint8("v0")
	.uint8("v1")
	.swstring("v2")
	.swstring("v3")
	.swstring("v4")
	.uint16("v5")
	.uint16("v6")
	.uint16("v7")
	.floatle("v8")
	.floatle("v9")
	.floatle("v10")