import { FC } from "react";
import { Heading, Text } from "@stevenr/components";

const ShowLicense: FC = () => {
    return (
        <>
            <Heading as="h4" mb="5px">
                The MIT License (MIT)
            </Heading>
            <Text color="text3">
                Copyright &copy; {new Date().getFullYear()} Stephen Reindl
            </Text>
            <Text color="text3">
                Permission is hereby granted, free of charge, to any person
                obtaining a copy of this software and associated documentation
                files (the &quot;Software&quot;), to deal in the Software
                without restriction, including without limitation the rights to
                use, copy, modify, merge, publish, distribute, sublicense,
                and/or sell copies of the Software, and to permit persons to
                whom the Software is furnished to do so, subject to the
                following conditions:
            </Text>
            <Text color="text3">
                The above copyright notice and this permission notice shall be
                included in all copies or substantial portions of the Software.
            </Text>
            <Text color="text3">
                THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF
                ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE
                AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
                HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
                WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
                OTHER DEALINGS IN THE SOFTWARE.
            </Text>
        </>
    );
};

export default ShowLicense;
