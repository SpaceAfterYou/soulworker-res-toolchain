import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint16("v0")
	.swstring("v1")
	.swstring("v2")
	.uint8("v3")
	.uint8("v4")
	.uint8("v5")
	.uint8("v6")
	.swstring("v7")