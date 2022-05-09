import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.uint32("v1")
	.swstring("v2")
	.uint32("v3")
	.swstring("v4")
	.uint16("v5")