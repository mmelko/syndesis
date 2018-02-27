/*
 * Copyright (C) 2016 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package io.syndesis.connector.generator.swagger;

import java.util.List;
import java.util.Optional;

import io.swagger.models.Operation;
import io.swagger.models.Response;
import io.swagger.models.parameters.BodyParameter;
import io.swagger.models.parameters.Parameter;

abstract class BaseDataShapeGenerator implements DataShapeGenerator {

    static Optional<BodyParameter> findBodyParameter(final Operation operation) {
        final List<Parameter> operationParameters = operation.getParameters();

        return operationParameters.stream().filter(p -> p instanceof BodyParameter && ((BodyParameter) p).getSchema() != null)
            .map(BodyParameter.class::cast).findFirst();
    }

    static Optional<Response> findResponse(final Operation operation) {
        return operation.getResponses().values().stream().filter(r -> r.getSchema() != null).findFirst();
    }
}
