import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint8("v0")
	.uint16("v1")
	.uint16("v2")
	.uint16("v3")
	.uint16("v4")
	.uint16("v5")
	.swstring("v6")
	.swstring("v7")
	.swstring("v8")
	.swstring("v9")
	.swstring("v10")