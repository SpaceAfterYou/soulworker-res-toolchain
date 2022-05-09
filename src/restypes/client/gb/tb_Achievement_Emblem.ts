import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint16("v0")
	.uint8("v1")
	.uint16("v2")
	.uint16("v3")
	.uint16("v4")
	.uint16("v5")
	.uint16("v6")
	.swstring("v7")
	.swstring("v8")
	.swstring("v9")
	.swstring("v10")
	.swstring("v11")